<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;


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

        return [
            'title' => $faker->sentence(), 
            'description' => $faker->realText(), 
            'image_path' => $faker->imageUrl(),
            'created_by' => 1,
            'updated_by' => 1,
            'created_at' => time(),
            'updated_at' => time(),
        ];
    }
}
