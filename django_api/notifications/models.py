from django.db import models
from django_api.users import models as user_models
from django_api.images import models as image_models

# Create your models here.


class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )

    creator = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name='creator')
    to = models.ForeignKey(user_models.User, on_delete=models.CASCADE, null=True, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    image = models.ForeignKey(image_models.Image, on_delete=models.CASCADE, null=True)
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'from: {} - to: {}'.format(self.creator, self.to)
