<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->foreignId("id_post");
            $table->string("username");
            $table->date("date_comment");
            $table->string("member_comment");
            $table->timestamps();
        });
        Schema::table('comments', function(Blueprint $table){
            $table->foreign("id_post")
                ->references("id")
                ->on("posts")
                ->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
