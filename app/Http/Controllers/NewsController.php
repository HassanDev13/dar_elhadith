<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\NewsResource;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function index()
    {
        $news = News::all();

        
      return inertia("News/Index", [
            "news" =>NewsResource::collection($news),
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
        return view('news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'images' => 'array',
            'available' => 'boolean',
        ]);

        News::create($request->all());

        return redirect()->route('news.index')
            ->with('success', 'News created successfully.');
    }
   public function destroy($id){
    $news = News::find($id);
    $news->delete();
    return redirect()->route('news.index')
            ->with('success', 'News deleted successfully.');
   }
}
