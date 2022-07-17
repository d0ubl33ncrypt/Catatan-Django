from django.db import models
from django.utils import timezone


# Create your models here.

class Catatan(models.Model):
    '''
    
    
    '''
    isi  = models.TextField(null=True, blank=True)
    waktu_dibuat = models.DateField(auto_now=True)
    waktu_terakhir_diedit = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return self.isi[0:50]

    class Meta:
        verbose_name_plural = 'Catatan-catatan'
