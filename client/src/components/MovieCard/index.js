import React from "react";
import {List, ListHeader, ListItem} from "../List";

export const MovieListItem = ({title, year, imdb}) => <ListItem>
  <p><a href={"https://www.imdb.com/title/" + imdb}>{title} ({year})</a></p>
</ListItem>

export const MovieList = ({query, children}) => <List>
  <ListHeader><h2 className="center">{(query) ? "Results" : "Type in a title"}</h2></ListHeader>
  <List list="ol">
    {children}
  </List>
</List>