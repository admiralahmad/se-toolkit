from pywebcopy import save_website
import sys

kwargs = {'project_name': 'Cloned Sites'}

save_website(
    url=str(sys.argv[1]),
    project_folder='C://Users//admiralahmad//Documents//projects',
    bypass_robots=True,
    open_in_browser=True,
    delay=10,
    threaded=False,
    **kwargs
)