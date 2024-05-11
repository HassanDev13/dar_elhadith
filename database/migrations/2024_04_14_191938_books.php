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
                'HumanDevelopment',
                'HadithAndItsSciences',
                'JurisprudencePrinciplesObjectives',
                'TheQuranAnditsSciences',
                'theLanguage',
                "AlgeriaHistory",
                'HistoryAndBiographies',
                'DoctrineAndRecommendation',
                'IslamicThoughtAndStudies',
                'AssociationBooks',
            ]);
            $table->boolean('available')->default(true); 
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->constrained('users');
            $table->timestamps();


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
