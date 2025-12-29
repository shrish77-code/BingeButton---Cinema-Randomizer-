import random
from Randomizer.data_loader import get_only_tvseries

all_series = get_only_tvseries()
 

def get_random_series():
    
    tvseries =random.sample(all_series,10)
    return tvseries
print(get_random_series())