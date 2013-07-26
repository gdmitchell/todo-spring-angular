package com.gdmitchell.controller;

import com.gdmitchell.domain.ToDo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/todos")
public class ToDoController {
    private List<ToDo> todos;

    private int id;

    public ToDoController() {
        todos = new ArrayList<ToDo>();
        ToDo beAwesome = new ToDo(getNextId(), "Be awesome");
        beAwesome.setDone(true);
        todos.add(beAwesome);
        ToDo learnAngular = new ToDo(getNextId(), "Learn Angular");
        todos.add(learnAngular);
        ToDo makeSampleWebApp = new ToDo(getNextId(), "Create a sample web app with Spring MVC and Angular");
        todos.add(makeSampleWebApp);
    }

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<ToDo> getAllToDos() {
        return todos;
    }

    @ResponseStatus(value = HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public void createToDo(@RequestBody ToDo toDo) {
        todos.add(toDo);
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody ToDo getToDo(@PathVariable int id) {
        return todos.get(id);
    }

    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void updateToDo(@PathVariable int id, @RequestBody ToDo toDo) {
        todos.remove(id);
        todos.add(id, toDo);
    }

    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteToDo(@PathVariable int id) {
        todos.remove(id);
    }

    private int getNextId() {
        return id++;
    }
}