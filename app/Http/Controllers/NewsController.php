<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\NewsResource;
use App\Http\Requests\StoreNewsRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Http\Requests\UpdateNewsRequest;


class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = News::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("title")) {
            $query->where("title", "like", "%" . request("title") . "%");
        }

        $news = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("News/Index", [
            "news" => NewsResource::collection($news),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('News/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewsRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        $news = News::create($data);

        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $path = $image->store('news/' . Str::random(), 'public');
                $imagePaths[] = asset('storage/' . $path);
            }
            $news->update(['image_paths' => json_encode($imagePaths)]);
        }

        return to_route('news.index')
            ->with('success', 'News was created');
    }


    public function update(UpdateNewsRequest $request, News $news)
    {
        $data = $request->validated();
        $data['updated_by'] = Auth::id();

        if ($request->hasFile('images')) {
            $imagePaths = json_decode($news->image_paths, true) ?? [];
            foreach ($request->file('images') as $image) {
                $path = $image->store('news/' . Str::random(), 'public');
                $imagePaths[] = asset('storage/' . $path);
            }
            $data['image_paths'] = json_encode($imagePaths);
        }

        $news->update($data);

        return to_route('news.index')
            ->with('success', "News \"$news->title\" was updated");
    }


    public function destroy($id)
    {
        $news = News::find($id);
        $news->delete();
        return redirect()->route('news.index')
            ->with('success', 'News deleted successfully.');
    }



    public function show($id)
    {
        $news = News::find($id);
        return Inertia::render('News/Show', [
            'news' => new NewsResource($news),
        ]);
    }
}
