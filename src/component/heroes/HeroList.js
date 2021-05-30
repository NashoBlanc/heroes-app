import React from 'react'
import { getHeroesByPubliser } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    console.log(publisher)

    const heroes = getHeroesByPubliser(publisher);
    return (
        <div className="card-columns">
            {
            heroes.map(hero => (
                <HeroCard key={hero.id}
                {...hero}> 
                </HeroCard>
            ))
            }
            
        </div>
        
    )
}
