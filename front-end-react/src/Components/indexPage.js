import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'
import Exercise from './exercise'

const SAMPLE_DATA = [
    {
        id: 1,
        title: 'Ride a bike',
        duration: 60,
        date: '2020-08-06T02:26:32.2548'
    },
    {
        id: 2,
        title: 'Walk in a park',
        duration: 40,
        date: '2020-08-08T12:26:32.4558'
    },
    {
        id: 3,
        title: 'Play Football',
        duration: 90,
        date: '2019-08-08T12:26:32.4558'
    },
]

export default function IndexPage() {
    const [exercises, setState] = useState(SAMPLE_DATA)
    return (
        <div className="exercises-list-container">
            { exercises.map(exercise => {
                return <Exercise 
                            key={uuid()}
                            title={exercise.title} 
                            duration={exercise.duration}
                            date={exercise.date} 
                            id={exercise.id}
                        />
            })}
        </div>
    )
}
