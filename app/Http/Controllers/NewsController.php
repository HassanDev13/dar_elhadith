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
       $data=$request->validated(); 

        /** @var $image \Illuminate\Http\UploadedFile */
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image'] = $image->store('news/' . Str::random(), 'public');
        }
        News::create($data);

        return to_route('news.index')
            ->with('success', 'News was created');

    //     $path =null;
    //    if ($request->hasFile('image')) {
    //         $directory = 'newsimages';
    //         Storage::makeDirectory($directory);
    //         $path = $request->file('image_path')->store($directory, 'public'); 
    //     }
    //     News::create($data);

    //     return redirect()->route('news.index')
    //         ->with('success', 'News created successfully.');    
    }

    public function edit(News $news)
    {
        return Inertia::render('News/Edit', [
            'news' => new NewsResource($news),
        ]);
    }

    public function update(UpdateNewsRequest $request , News $news){
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($news->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($news->image_path));
            }
            $data['image_path'] = $image->store('news-images/' . Str::random(), 'public');
        }
        $news->update($data);

        return to_route('news.index')
            ->with('success', "news \"$news->title\" was updated");


    }

   public function destroy($id){
    $news = News::find($id);
    $news->delete();
    return redirect()->route('news.index')
            ->with('success', 'News deleted successfully.');
   }
   public function show($id){
    $news = News::find($id);
    return Inertia::render('News/Show', [
        'news' => new NewsResource($news),
    ]);
   }
}
