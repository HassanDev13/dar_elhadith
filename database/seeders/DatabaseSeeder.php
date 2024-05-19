<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\News;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(3)->create();

        // User::factory()->create([
        //     'name' => 'hacene',
        //     'email' => 'hacene@example.com',
        //     'password' => Hash::make('password'),

        // ]);

        News::factory(20)->create();    
    }
}
