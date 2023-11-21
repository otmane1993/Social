<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::post('/api/user',[UserController::class,'store']);
Route::get('/user',[UserController::class,'index'])->name('user');
/*Route::get('/send-mail/{email}', function ($email) {   

    $contenu = [

        'title' => 'Mail depuis Letecode.com',
        'body' => "Ce mail est pour tester l'envoi de mail depuis laravel"

    ];   

    \Mail::to($email)->send(new \App\Mail\ContactMail($contenu));   

    dd("Email envoyé avec succès.");

});*/