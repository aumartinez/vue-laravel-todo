<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    //
    public function index()
    {
        return Task::all();
    }

    public function store(Request $request) 
    {
        $validated = $request->validate([
            'index' => 'required',
            'name' => 'required',
        ]);
        
        Task::create($request->all());
        $mess = [
            'status' => 'success',
            'message' => 'Tarea agregada con exito'
        ];
        return response($mess);
    }

    public function delete(Request $request, $index)
    {
        $mess = [
            'status' => 'success',
            'message' => 'Tarea borrada'
        ];

        Task::where('index', $index)->delete();
        return response($mess);
    }
}
