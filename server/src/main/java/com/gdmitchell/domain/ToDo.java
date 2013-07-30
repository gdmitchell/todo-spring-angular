package com.gdmitchell.domain;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotBlank;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 *
 * @author Graham
 *         Date: 7/23/13
 *         Time: 10:58 AM
 */
public class ToDo {
    private int id;

    @NotBlank
    @Length(min = 3, max = 100)
    private String description;

    private boolean done;

    private Date date;

    public ToDo() {
        setDone(false);
        setDate(new Date());
    }

    public ToDo(int id, String description) {
        this();
        setId(id);
        setDescription(description);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
