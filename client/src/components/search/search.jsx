import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core"
import { useCombobox } from "downshift";
import "./search.scss"

const Search = () => {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3000/users/all`).then((res) => {
      const users = res.data;
      setUsers(users);
    });
  }, []);

  const {isOpen, getMenuProps, getInputProps,getComboboxProps,highlightedIndex,getItemProps} = 
  useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
        ), 
      );
    },
  });

  return (
 
    <div className="widgets_search">
      
        <div className="widgets_input">
            <div {...getComboboxProps()}>
                <input {...getInputProps()} placeholder="Busca un usuario" type="text"/>
            </div>
        </div>

        <ul className="search_dropdown" {...getMenuProps()}>
            {isOpen &&
                inputItems.map((item, index) => (
                    <div key={item._id} {...getItemProps({item, index})}>
                        <Link to={"/" + item.username}>
                        <li style={highlightedIndex === index ? {background: "#feefe8"} : {}}>
                          <div className="search_list">
                            <div className="search_list_left">
                              <Avatar src={item.avatar}/>
                            </div>
                            <div className="search_list_right">
                              <h4>{item.name} {item.surname}</h4>
                              <span className="post_user">@{item.username}</span>
                            </div>
                          </div>
                        </li>
                        </Link>
                    </div>
                ))
            }
        </ul> 
    </div>
  );
};

export default Search;
