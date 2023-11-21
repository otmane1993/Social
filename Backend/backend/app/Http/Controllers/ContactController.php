<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create()
    {
        return view('contact');
    }
 
    public function store(ContactRequest $request)
    {
        Mail::to('administrateur@chezmoi.com')
            ->queue(new ContactMail($request->except('_token')));
 
        return view('confirm');
    }
}
