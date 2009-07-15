package org.gwtdraw2d.client;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Base class for all Draw2d wrapper components.
 * @author lautaro.brasseur
 */
public abstract class Component {
    /**
     * The JavaScriptObject to be wrapped.
     */
    private JavaScriptObject jsObj;

    /**
     * Gets the wrapperd JavaScriptObject. If it is null, it is created.
     * @return The JavaScriptObject
     */
    protected final JavaScriptObject getJsObj() {
        if (jsObj == null) {
            jsObj = create();
        }
        return jsObj;
    }

    /**
     * Abstract method for creating the wrapped JavaScriptObject.
     * @return The JavaScriptObject
     */
    protected abstract JavaScriptObject create();

    /**
     * Invokes a javascript method on the JavaScriptObject.
     * @param method The method name
     * @param arguments The arguments
     * @return The returned value. Null if the method is void
     */
    protected final JavaScriptObject invoke(final String method,
            final Object... arguments) {
        return invoke(getJsObj(), method, arguments);
    }

    /**
     * Invokes a javascript method on the target JavaScriptObject.
     * @param target The target JavaScriptObject
     * @param method The method name
     * @param arguments The arguments
     * @return The returned value. Null if the method is void
     */
    protected final JavaScriptObject invoke(final JavaScriptObject target,
            final String method, final Object... arguments) {
        return invokeNative(target, method, Arrays.asList(arguments));
    }

    /**
     * Invokes a javascript method on the target JavaScriptObject.
     * @param target The target JavaScriptObject
     * @param method The method name
     * @param arguments The arguments
     * @return The returned value. Null if the method is void
     */
    // TODO: Find a way to build a generic return value (not just JavaScriptObject)
    private native JavaScriptObject invokeNative(final JavaScriptObject target,
            final String method, final List<Object> arguments) /*-{
        var size = arguments.@java.util.List::size()(0);
        var argArray = new Array();
        var argString = "";

        for (var n = 0; n <  size; n++) {
            argArray[n] = arguments.@java.util.List::get(I)(n);
            if (n != 0) {
                argString += ",";
            }
            argString += "argArray[" + n + "]";
        }

        var retValue = eval("target." + method + "(" + argString + ")");

        if (retValue) {
            return retValue;
        } else {
            return null;
        }
    }-*/;
}
