<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
             $table->string('author');
             $table->string('title');
           
             $table->enum('category', [
                'literature',
                'Human Development',
                'Hadith and its sciences',
                'Jurisprudence,principles objectives',
                'The Quran and its sciences',
                'the language',
                "Algeria history",
                'History and biographies',
                'Doctrine and recommendation',
                'Islamic thought and studies',
                'Association books',
            ]);
            $table->boolean('available')->default(true); 
            $table->timestamps();
            $table->unsignedBigInteger('user_id');// Define the user_id column
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
