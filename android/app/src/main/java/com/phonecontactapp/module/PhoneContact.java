package com.phonecontactapp.module;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.provider.ContactsContract;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;

public class PhoneContact extends ReactContextBaseJavaModule {

    public PhoneContact(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void show(Promise promise) {

        Context context = getReactApplicationContext();
        ContentResolver contentResolver = context.getContentResolver();
        Cursor cursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
        WritableNativeArray array = new WritableNativeArray();

        while (cursor.moveToNext()) {
            String fullName = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
            String phoneNumber = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
            WritableNativeMap map = new WritableNativeMap();
            map.putString("fullName", fullName);
            map.putString("phoneNumber", phoneNumber);

            array.pushMap(map);
        }

        promise.resolve(array);

    }

    @Override
    public String getName() {
        return "PhoneContact";
    }
}
