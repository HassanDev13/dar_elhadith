<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Answer extends Model
{
    use HasFactory;

    /**
     * Get the quiz that owns the answer.
     */
    public function sections(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }
}
