import React from "react";
import ContactCard from "components/ContactCard/ContactCard";
import { useSelector } from "react-redux";
import { contactValue, filterValue } from "redux/slice";
import { useGetContactsQuery } from "redux/slice";

function ContactList() {
  const { data, error, isLoading } = useGetContactsQuery();
  
  const filterBook = useSelector(state=> state);
console.log(filterBook);
  // const filterData = useSelector(filterValue);

  // const data = filterBook.filter(({ name }) =>
  //   name.toLowerCase().startsWith(filterData.toLowerCase())
  // );

  return (
    <ul>
      {data && data.map((contact, index) => (
        <ContactCard contact={contact} key={index} />
      ))}
    </ul>
  );
}

export default ContactList;
