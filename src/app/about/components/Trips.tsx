"use client"

import { prisma } from "@/lib/prisma";
import React, { useEffect, useState } from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
};

const Trip = async () => {
  const [data, setDate] = useState([])

  useEffect(( () => {
    fetch("http://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(res => setDate(res));
  }), []);
  return (
    <div>
      {data.map((i : any) => <p key={i.id}>{i.titlle}</p>)}
    </div>
  );
};

export default Trip;
