export function getallnotes(req,res){
    res.status(201).send("u got the notes");
}

export function createnote(req,res  ){
    res.status(201).send("note created successfully");
}

export function updatenote(req,res){
    res.status(201).send("note updated successfully");
}

export function deletenote(req,res){   
    res.status(201).send("note deleted successfully");
}
