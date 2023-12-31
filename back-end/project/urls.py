from django.contrib import admin
from django.urls import include, path



urlpatterns = [
    path('admin/', admin.site.urls),
    path('callback/', include('callback.urls')),
    path('authentication/', include('authentication.urls')),
    path('administrator/', include('administrator.urls'))
]
