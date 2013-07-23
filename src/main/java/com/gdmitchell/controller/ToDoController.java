package com.gdmitchell.controller;

import com.gdmitchell.domain.ToDo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @RequestMapping(value = "/todos/add", method = RequestMethod.POST)
    public @ResponseBody ToDo createToDo(@RequestBody ToDo toDo) {
        todos.add(toDo);
        return toDo;
    }

    @RequestMapping(value = "/todos/{id}", method = RequestMethod.GET)
    public @ResponseBody ToDo getToDo(@PathVariable int id) {
        return todos.get(id);
    }


}