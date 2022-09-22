<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('start_date');
            $table->date('end_date');
            $table->time('event_start');
            $table->time('event_end');
            $table->string('description');
            $table->string('contact');
            $table->string('price');
            $table->unsignedBigInteger('categorie_id');
            $table->unsignedBigInteger('location_id');
            $table->unsignedBigInteger('comment_id');
            $table->timestamps();
            $table->foreign('categorie_id')->references('id')->on('categories');
            $table->foreign('location_id')->references('id')->on('locations');
            $table->foreign('comment_id')->references('id')->on('comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
