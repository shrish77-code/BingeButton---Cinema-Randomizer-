import random 
from Randomizer.data_loader import get_all_data

both = get_all_data()
def both_series_movies():
    random_both = random.sample(both,10)
    return random_both
