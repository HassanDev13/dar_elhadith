<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create('ar_SA'); // Create an instance of the Faker generator with Arabic locale

          $imagePaths = [
            asset('storage/news/' . Str::random() . '.jpg'),
            asset('storage/news/' . Str::random() . '.png')
        ];

        return [
            'title' => $faker->sentence(), 
            'description' => $faker->realText(), 
            'image_path' => json_encode($imagePaths),
            'created_by' => 3,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
