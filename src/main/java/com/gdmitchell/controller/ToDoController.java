package com.gdmitchell.controller;

import com.gdmitchell.domain.ToDo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/")
public class ToDoController {
    private List<ToDo> todos;

    public ToDoController() {
        todos = new ArrayList<ToDo>();
        ToDo learnAngular = new ToDo("Learn Angular");
        todos.add(learnAngular);
        ToDo makeSampleWebApp = new ToDo("Create a sample web app with Spring MVC and Angular");
        todos.add(makeSampleWebApp);
    }

    @RequestMapping(value = "/todos", method = RequestMethod.GET)
    public @ResponseBody List<ToDo> getAllToDos() {
        return todos;
    }

    @RequestMapping(value = "/todos/add", method = RequestMethod.POST)
    public void createToDo(@RequestBody ToDo toDo, HttpServletResponse response) {
        todos.add(toDo);
        response.setStatus(HttpServletResponse.SC_CREATED);
    }

    @RequestMapping(value = "/todos/{id}", method = RequestMethod.GET)
    public @ResponseBody ToDo getToDo(@PathVariable int id) {
        return todos.get(id);
    }

    @RequestMapping(value = "/todos/{id}", method = RequestMethod.PUT)
    public void updateToDo(@PathVariable int id, @RequestBody ToDo toDo, HttpServletResponse response) {
        ToDo updatedToDo = todos.get(id);
        updatedToDo.setDescription(toDo.getDescription());
        updatedToDo.setDate(toDo.getDate());
        updatedToDo.setDone(toDo.isDone());
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }

    @RequestMapping(value = "/todos/{id}", method = RequestMethod.DELETE)
    public void deleteToDo(@PathVariable int id, HttpServletResponse response) {
        todos.remove(id);
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
}