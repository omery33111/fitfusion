from django.db import models



class Callback(models.Model):
    name = models.CharField(max_length = 100)
    instagram = models.CharField(max_length = 40)
    phone_number = models.CharField(max_length = 20)
    message = models.TextField(default = ".ללא הודעה", null = True, blank = True, max_length = 350)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
