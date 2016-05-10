from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ListField(models.TextField):
    __metaclass__ = models.SubfieldBase
    description = "Stores a python list"

    def __init__(self, *args, **kwargs):
        super(ListField, self).__init__(*args, **kwargs)

    def to_python(self, value):
        if not value:
            value = []

        if isinstance(value, list):
            return value

        return value

    def get_prep_value(self, value):
        if value is None:
            return value

        return unicode(value)

    def value_to_string(self, obj):
        value = self._get_val_from_obj(obj)
        return self.get_db_prep_value(value)

class Post(models.Model):
	author = models.CharField(max_length = 30)
	title = models.CharField(max_length = 100)
	bodytext = models.TextField()
	caption = models.CharField(max_length = 250 , blank = True, null=True)
	timestamp = models.DateTimeField(blank=True, null=True)
	tags = ListField()