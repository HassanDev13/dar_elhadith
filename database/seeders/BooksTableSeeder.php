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
                    'available' => true, 
                    'created_by' => 1,
                    'updated_by' => 1,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        } catch (\Exception $e) {
            echo "Error reading CSV file: " . $e->getMessage();
        }
    }
}
