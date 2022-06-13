<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Categories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->integer('code');
            $table->string('title', 10);
            $table->string('description', 500);
            $table->unsignedInteger('idParentCategory')->default(0);
            $table->date('createDate')->nullable(false);
            $table->date('updateDate')->nullable(false);
            $table->date('sofDelete')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
