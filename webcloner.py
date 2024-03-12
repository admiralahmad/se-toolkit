#from pywebcopy import save_page
from pywebcopy import save_page, save_web_page, save_webpage, save_website
import sys
import os
def main():
    print("Welcome to the Social Engineer!")
    print("Choose an option:")
    print("1. Clone a site")
    print("2. Mass mailer")
    print("3. SMS sender")
    choice = input("Enter your choice (1/2/3): ")

    if choice == '1':
        clone_site()
    elif choice == '2':
        mass_mailer()
    elif choice == '3':
        sms_sender()
    else:
        print("Invalid choice. Please select a valid option.")



def clone_site():
    # Code to clone a site
    global user_input, filepath
    kwargs = {'project_name': 'Cloned Sites'}



save_page(
    #url=str(sys.argv[1]),
    url=(input("Enter the url to clone... \n URL: ")),
    project_folder=(input("Enter the file path to store the cloned site... \n FILEPATH:")),
    #project_folder="/Users/ahmadsaidu_1/Documents/MIDDLESEX/CST4550 (PEN TESTING & DIG FORENSICS)/project/se-toolkit",
    bypass_robots=True,
    open_in_browser=True,
    delay=10,
    threaded=False,
    
)


def mass_mailer():
    # Code for mass mailer
    print("Initiating mass mailer...")

def sms_sender():
    # Code for SMS sender
    print("Sending SMS...")

if __name__ == "__main__":
    main()
