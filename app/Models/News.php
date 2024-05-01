<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['image_path', 'title', 'description',  'created_by', 'updated_by'];

    /**
     * Define the relationship between User and News.
     */
    public function  createdBy()
    {
        return $this->belongsTo(User::class , 'created_by');
    }

    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
