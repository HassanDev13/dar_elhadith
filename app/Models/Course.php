<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    /**
     * The users that belong to the course.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "enrollments", "user_id", "course_id");
    }
    /**
     * Get the chapters for the course.
     */
    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class);
    }
}
