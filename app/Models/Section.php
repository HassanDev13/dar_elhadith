<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Section extends Model
{
    use HasFactory;

    /**
     * Get the chapter that owns the section.
     */
    public function chapter(): BelongsTo
    {
        return $this->belongsTo(Chapter::class);
    }

    /**
     * Get the lessons for the section.
     */
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }
    /**
     * Get the lessons for the section.
     */
    public function quiz(): HasOne
    {
        return $this->hasOne(Quiz::class);
    }
}
