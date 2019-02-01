from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(blank=False, null=False, unique=True, max_length=200)

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200)
    note = models.CharField(default=None, blank=True, null=True, max_length=100000)
    starred = models.BooleanField(default=False)
    start_date = models.DateTimeField('start date')
    end_date = models.DateTimeField('end date')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title