<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FriendController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/inscription',[UserController::class,'store']);
Route::post('/login',[UserController::class,'login']);
Route::post('/find',[UserController::class,'find']);
Route::post('/forget',[UserController::class,'forget']);
Route::post('/search',[UserController::class,'search']);
Route::post('/add-friend/{user}',[FriendController::class,'add'])->name('add.friend');