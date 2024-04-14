<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use League\Csv\Reader;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csvFile = "booksCSV/Association.csv";

        try {
            // Load the CSV document from a file path
            $csv = Reader::createFromPath($csvFile, 'r');
            $csv->setHeaderOffset(0);

            // Retrieve records from the CSV file
            $records = $csv->getRecords();

            foreach ($records as $record) {
                DB::table('books')->insert([
                    'author' => $record['author'],
                    'title' => $record['title'],       
                    'category' => $record['category'],
                    'available' => true, // Set 'available' to true by default
                    'created_at' => now(),
                    'updated_at' => now(),
                    'user_id' => 1
                ]);
            }
        } catch (\Exception $e) {
            echo "Error reading CSV file: " . $e->getMessage();
        }
    }
}
