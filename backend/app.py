from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# Correct imports based on your folder structure
from Randomizer.movie_randomizer import get_random_movie
from Randomizer.tv_randomizer import get_random_series
from Randomizer.both_randomizer import both_series_movies

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/random")
def random_items(type: str = "movie"):
    type = type.lower().strip()

    if type == "movie":
        return get_random_movie()
    elif type == "tv":
        return get_random_series()
    elif type == "both":
        return both_series_movies()
    else:
        raise HTTPException(
            status_code=400,
            detail="Invalid type. Use: movie, tv, or both"
        )
