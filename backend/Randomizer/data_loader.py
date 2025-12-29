import pandas as py
from pathlib import Path

global_cached_variable = None

CSV_PATH = Path(__file__).resolve().parents[1] / "netflix_dataset.csv"



def load_data():
    global global_cached_variable
    if global_cached_variable is not None:
        return global_cached_variable
    df = py.read_csv(CSV_PATH, dtype=str)
    df = df.fillna("")
    df = df.astype(str)
    df.columns = [c.strip() for c in df.columns]
    data_list = df.to_dict(orient="records")
    global_cached_variable = data_list
    return global_cached_variable

def get_all_data():
        return load_data()
def get_only_movies():
    all_data = get_all_data()
    movies = []
    for item in all_data:
        if item["type"].strip().lower()=="movie":
            movies.append(item)
    return movies
def get_only_tvseries():
    all_data = get_all_data()
    tvseries = []
    for item in all_data:
        if item["type"].strip().lower()=="tv show":
            tvseries.append(item)
    return tvseries

