<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Lesson extends Model
{
    use HasFactory;



    /**
     * The users that belong to the course.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "progress", "user_id", "lesson_id");
    }

    /**
     * Get the sections that owns the lesson.
     */
    public function sections(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }
}
