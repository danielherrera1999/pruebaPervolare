<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;
use Carbon\Carbon;


class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function manageCategory()
    {
        $categories = Categories::with('childs')->get();
        // $allCategories = Categories::pluck('id','title')->all();

        return response()->json($categories, 200);
    }

    public function selectCategory()
    {
        $allCategories = Categories::select('id','title')->get();

        return response()->json($allCategories, 200);
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $this->validate($request, [
        //     'code' => 'required',
        // ]);

        $data = new Categories;
        $data->code = $request->code;
        $data->title = $request->title;
        $data->description = $request->description;
        $data->idParentCategory = empty($request->idParentCategory) ? 0 : $request->idParentCategory;
        $data->createDate = Carbon::now();
        $data->updateDate = Carbon::now();

        $data->save();

        return response()->json(['message' => 'New Category added successfully.'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function edit(Categories $categories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categories $categories)
    {
        //

        $data = Categories::where('id', $request->id)->first();
        $data->code = $request->code;
        $data->title = $request->title;
        $data->description = $request->description;
        $data->idParentCategory = empty($request->idParentCategory) ? 0 : $request->idParentCategory;
        $data->createDate = $request->createDate;
        $data->updateDate = Carbon::now();

        $data->save();

        return response()->json(['message' => 'Update Category successfully.'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Categories  $categories
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categories $categories)
    {
        //
    }
}
