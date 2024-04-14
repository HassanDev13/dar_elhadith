<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'images'];

    /**
     * Define the relationship between User and News.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
