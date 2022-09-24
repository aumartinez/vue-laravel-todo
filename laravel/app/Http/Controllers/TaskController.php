<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ModelsTask;

class TaskController extends Controller
{
    //
    public function index()
    {
        return Task::all();
    }

    public function store(Request $request) 
    {
        return Task::create($request->all());
    }

    public function delete(Request $request, $index)
    {
        $task = Task::findOrFail($index);
        $task->delete();
        return 204;
    }
}
