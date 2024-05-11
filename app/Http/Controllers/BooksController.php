<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Http\Resources\NewsResource;
use App\Http\Resources\BooksResource;
use App\Http\Requests\StoreBookRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UpdateBookRequest;
use Inertia\Inertia;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
      public function index()
    {
        $query = Book::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("title")) {
            $query->where("title", "like", "%" . request("title") . "%");
        }
        if (request("category")) {
           $query->where("category", request("category"));
        }

        $books = $query->orderBy($sortField, $sortDirection)
            ->paginate(30)
            ->onEachSide(1);

        return inertia("Books/Index", [
            "books" => BooksResource::collection($books),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $data=$request->validated(); 

        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
       
        $books = Book::create($data);
        return to_route('books.index')
            ->with('success', "book \"$books->title\" was created");
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $books = Book::find($id);
        return Inertia::render('Books/Show', [
            'books' => new BooksResource($books),
    ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $books)
    {
       return Inertia::render('Books/Edit', [
            'books' => new BooksResource($books),
        ]);
        

         
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $books)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();
        
        $books->update($data);

        return to_route('books.index')
            ->with('success', "Book \"$books->title\" was updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $books = Book::findOrFail($id);
        $books->delete();
        return to_route('books.index')
            ->with('success', "book \"$books->title\" was deleted");
    }
}
