from pywebcopy import save_page
import os
save_page(
    #url=str(sys.argv[1]),
    url=(input("Enter the url to clone... \n URL: ")),
    #project_folder=(input("Enter the file path to store the cloned site... \n FILEPATH:")),
    project_folder=os.getcwd,
    bypass_robots=True,
    open_in_browser=True,
    delay=10,
    threaded=False,
    
)