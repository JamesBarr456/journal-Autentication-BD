import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({ title = "", body, id, imageUrls = [], date }) => {
  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    //xq usa el useMemo????
    //Respuesta: Para simplemete cuando se renderize algun componente y react por default renderize toda la pagina, no lo hagan los titulos, que van a hacer los mismos a menos que cambien.
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
