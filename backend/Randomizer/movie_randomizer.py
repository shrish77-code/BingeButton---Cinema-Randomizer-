import random
from Randomizer.data_loader import get_only_movies

all_movies = get_only_movies()
 

def get_random_movie():
    
    movies =random.sample(all_movies,10)
    return movies


